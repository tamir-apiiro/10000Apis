
const express = require('express')
import {handler3338} from "./handler3338";
const app = express()
app.get('/3338', handler3338)
app.listen(3000, () => {})
        