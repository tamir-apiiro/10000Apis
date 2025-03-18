
const express = require('express')
import {handler776} from "./handler776";
const app = express()
app.get('/776', handler776)
app.listen(3000, () => {})
        