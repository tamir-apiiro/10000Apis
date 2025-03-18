
const express = require('express')
import {handler3058} from "./handler3058";
const app = express()
app.get('/3058', handler3058)
app.listen(3000, () => {})
        