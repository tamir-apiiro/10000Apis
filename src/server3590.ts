
const express = require('express')
import {handler3590} from "./handler3590";
const app = express()
app.get('/3590', handler3590)
app.listen(3000, () => {})
        