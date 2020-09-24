pub mod bootinfo;
pub mod entry;
pub mod paging;
pub mod serial;

pub use crate::arch::bootinfo::*;
use crate::arch::paging::*;
use crate::arch::serial::SerialPort;
use goblin::elf;

extern "C" {
	static kernel_end: u8;
}

pub const ELF_ARCH: u16 = elf::header::EM_AARCH64;

const RAM_START: u64 = 0x80000000;
const SERIAL_PORT_ADDRESS: u32 = 0x10000000;

// VARIABLES
pub static mut BOOT_INFO: BootInfo = BootInfo::new();
static COM1: SerialPort = SerialPort::new(SERIAL_PORT_ADDRESS);

pub fn message_output_init() {
	// nothing to do
}

pub fn output_message_byte(byte: u8) {
	COM1.write_byte(byte);
}

pub unsafe fn get_memory(_memory_size: u64) -> u64 {
    unimplemented!()
}

pub fn find_kernel() -> &'static [u8] {
	include_bytes!(env!("HERMIT_APP"))
}

pub unsafe fn boot_kernel(virtual_address: u64, mem_size: u64, entry_point: u64) -> ! {
    unimplemented!()
}
