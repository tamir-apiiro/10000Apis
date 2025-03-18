
const express = require('express')
import {handler3673} from "./handler3673";
const app = express()
app.get('/3673', handler3673)
app.listen(3000, () => {})
        