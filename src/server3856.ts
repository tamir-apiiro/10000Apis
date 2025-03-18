
const express = require('express')
import {handler3856} from "./handler3856";
const app = express()
app.get('/3856', handler3856)
app.listen(3000, () => {})
        