
const express = require('express')
import {handler3565} from "./handler3565";
const app = express()
app.get('/3565', handler3565)
app.listen(3000, () => {})
        