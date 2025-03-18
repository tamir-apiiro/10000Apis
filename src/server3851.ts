
const express = require('express')
import {handler3851} from "./handler3851";
const app = express()
app.get('/3851', handler3851)
app.listen(3000, () => {})
        