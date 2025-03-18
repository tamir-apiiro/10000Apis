
const express = require('express')
import {handler3636} from "./handler3636";
const app = express()
app.get('/3636', handler3636)
app.listen(3000, () => {})
        