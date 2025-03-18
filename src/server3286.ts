
const express = require('express')
import {handler3286} from "./handler3286";
const app = express()
app.get('/3286', handler3286)
app.listen(3000, () => {})
        