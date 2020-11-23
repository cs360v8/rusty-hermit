(function() {var implementors = {};
implementors["ascii"] = [{"text":"impl PartialOrd&lt;AsciiChar&gt; for AsciiChar","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;u8&gt; for AsciiChar","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AsciiChar&gt; for u8","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;char&gt; for AsciiChar","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AsciiChar&gt; for char","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AsciiStr&gt; for AsciiStr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AsciiString&gt; for AsciiString","synthetic":false,"types":[]}];
implementors["byteorder"] = [{"text":"impl PartialOrd&lt;BigEndian&gt; for BigEndian","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LittleEndian&gt; for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl PartialOrd&lt;Bytes&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8&gt;&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;Bytes&gt; for &amp;'_ [u8]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;Bytes&gt; for &amp;'_ str","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for Bytes <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Bytes: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8&gt;&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for BytesMut <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BytesMut: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;BytesMut&gt; for &amp;'_ [u8]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;BytesMut&gt; for &amp;'_ str","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl PartialOrd&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NaiveDate&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NaiveDateTime&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IsoWeek&gt; for IsoWeek","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NaiveTime&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; PartialOrd&lt;Date&lt;Tz&gt;&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone, Tz2:&nbsp;TimeZone&gt; PartialOrd&lt;DateTime&lt;Tz2&gt;&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;'g, T&gt; PartialOrd&lt;Shared&lt;'g, T&gt;&gt; for Shared&lt;'g, T&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L:&nbsp;PartialOrd, R:&nbsp;PartialOrd&gt; PartialOrd&lt;Either&lt;L, R&gt;&gt; for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["hermit_abi"] = [{"text":"impl PartialOrd&lt;Priority&gt; for Priority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Handle&gt; for Handle","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Version&gt; for Version","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4Address&gt; for Ipv4Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6Address&gt; for Ipv6Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IpAddress&gt; for IpAddress","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Metadata&lt;'a&gt;&gt; for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;MetadataBuilder&lt;'a&gt;&gt; for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["smoltcp"] = [{"text":"impl PartialOrd&lt;PcapLinkType&gt; for PcapLinkType","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EtherType&gt; for EtherType","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Address&gt; for Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Hardware&gt; for Hardware","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Operation&gt; for Operation","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Version&gt; for Version","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Protocol&gt; for Protocol","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Address&gt; for Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Cidr&gt; for Cidr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Endpoint&gt; for Endpoint","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Address&gt; for Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Cidr&gt; for Cidr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Address&gt; for Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Cidr&gt; for Cidr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Type&gt; for Type","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FailureType&gt; for FailureType","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Message&gt; for Message","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DstUnreachable&gt; for DstUnreachable","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Redirect&gt; for Redirect","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TimeExceeded&gt; for TimeExceeded","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ParamProblem&gt; for ParamProblem","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Message&gt; for Message","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DstUnreachable&gt; for DstUnreachable","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ParamProblem&gt; for ParamProblem","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TimeExceeded&gt; for TimeExceeded","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RouterFlags&gt; for RouterFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NeighborFlags&gt; for NeighborFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Type&gt; for Type","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PrefixInfoFlags&gt; for PrefixInfoFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SeqNumber&gt; for SeqNumber","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Handle&gt; for Handle","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Instant&gt; for Instant","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Duration&gt; for Duration","synthetic":false,"types":[]}];
implementors["tiny_http"] = [{"text":"impl PartialOrd&lt;StatusCode&gt; for StatusCode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;u16&gt; for StatusCode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StatusCode&gt; for u16","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HTTPVersion&gt; for HTTPVersion","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;(u8, u8)&gt; for HTTPVersion","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HTTPVersion&gt; for (u8, u8)","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;ArrayVec&lt;A&gt;&gt; for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;TinyVec&lt;A&gt;&gt; for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;PartialOrd&gt; PartialOrd&lt;Host&lt;S&gt;&gt; for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Url&gt; for Url","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V:&nbsp;PartialOrd&gt; PartialOrd&lt;VecMap&lt;V&gt;&gt; for VecMap&lt;V&gt;","synthetic":false,"types":[]}];
implementors["x86"] = [{"text":"impl PartialOrd&lt;EFlags&gt; for EFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PAddr&gt; for PAddr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;VAddr&gt; for VAddr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PML4Flags&gt; for PML4Flags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PDPTFlags&gt; for PDPTFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PDFlags&gt; for PDFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PTFlags&gt; for PTFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;RFlags&gt; for RFlags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Cr0&gt; for Cr0","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Cr4&gt; for Cr4","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Xcr0&gt; for Xcr0","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PageFaultError&gt; for PageFaultError","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SegmentSelector&gt; for SegmentSelector","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PinbasedControls&gt; for PinbasedControls","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PrimaryControls&gt; for PrimaryControls","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SecondaryControls&gt; for SecondaryControls","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EntryControls&gt; for EntryControls","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ExitControls&gt; for ExitControls","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()