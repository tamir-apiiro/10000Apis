
const express = require('express')
import {handler3150} from "./handler3150";
const app = express()
app.get('/3150', handler3150)
app.listen(3000, () => {})
        