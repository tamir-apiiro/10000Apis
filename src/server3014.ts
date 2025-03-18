
const express = require('express')
import {handler3014} from "./handler3014";
const app = express()
app.get('/3014', handler3014)
app.listen(3000, () => {})
        