
const express = require('express')
import {handler3078} from "./handler3078";
const app = express()
app.get('/3078', handler3078)
app.listen(3000, () => {})
        