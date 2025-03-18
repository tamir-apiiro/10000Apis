
const express = require('express')
import {handler3990} from "./handler3990";
const app = express()
app.get('/3990', handler3990)
app.listen(3000, () => {})
        