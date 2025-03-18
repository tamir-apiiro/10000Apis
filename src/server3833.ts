
const express = require('express')
import {handler3833} from "./handler3833";
const app = express()
app.get('/3833', handler3833)
app.listen(3000, () => {})
        