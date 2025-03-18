
const express = require('express')
import {handler3399} from "./handler3399";
const app = express()
app.get('/3399', handler3399)
app.listen(3000, () => {})
        