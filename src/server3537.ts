
const express = require('express')
import {handler3537} from "./handler3537";
const app = express()
app.get('/3537', handler3537)
app.listen(3000, () => {})
        