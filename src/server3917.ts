
const express = require('express')
import {handler3917} from "./handler3917";
const app = express()
app.get('/3917', handler3917)
app.listen(3000, () => {})
        