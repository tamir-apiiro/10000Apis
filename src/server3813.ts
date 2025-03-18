
const express = require('express')
import {handler3813} from "./handler3813";
const app = express()
app.get('/3813', handler3813)
app.listen(3000, () => {})
        