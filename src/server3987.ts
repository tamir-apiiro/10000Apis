
const express = require('express')
import {handler3987} from "./handler3987";
const app = express()
app.get('/3987', handler3987)
app.listen(3000, () => {})
        