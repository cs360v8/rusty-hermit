// Steve Operating System
// Stephen Marz
// 21 Sep 2019

global_asm!("entry.asm");
global_asm!("trap.asm");

// ///////////////////////////////////
// / LANGUAGE STRUCTURES / FUNCTIONS
// ///////////////////////////////////
#[no_mangle]
extern "C" fn eh_personality() {}
#[panic_handler]
fn panic(info: &core::panic::PanicInfo) -> ! {
	print!("Aborting: ");
	if let Some(p) = info.location() {
		println!(
					"line {}, file {}: {}",
					p.line(),
					p.file(),
					info.message().unwrap()
		);
	}
	else {
		println!("no information available.");
	}
	abort();
}
#[no_mangle]
extern "C"
fn abort() -> ! {
	loop {
		unsafe {
			llvm_asm!("wfi"::::"volatile");
		}
	}
}

#[no_mangle]
extern "C"
fn _start() {
	// Main should initialize all sub-systems and get
	// ready to start scheduling. The last thing this
    // should do is start the timer.
    println!("HELLO WORLD");
}