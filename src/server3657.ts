
const express = require('express')
import {handler3657} from "./handler3657";
const app = express()
app.get('/3657', handler3657)
app.listen(3000, () => {})
        