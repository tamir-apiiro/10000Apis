
const express = require('express')
import {handler3930} from "./handler3930";
const app = express()
app.get('/3930', handler3930)
app.listen(3000, () => {})
        