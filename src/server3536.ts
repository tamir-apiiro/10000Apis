
const express = require('express')
import {handler3536} from "./handler3536";
const app = express()
app.get('/3536', handler3536)
app.listen(3000, () => {})
        