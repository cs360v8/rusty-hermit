// Copyright (c) 2019 Stefan Lankes, RWTH Aachen University
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use crate::arch::riscv64::SERIAL_PORT_ADDRESS;
use core::fmt;

#[repr(C)]
#[derive(Clone, Copy)]
pub struct BootInfo {

}

impl BootInfo {
	pub const fn new() -> Self {
		BootInfo {

		}
	}
}

impl fmt::Debug for BootInfo {
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
		writeln!(f, "boot info")?;
	}
}
