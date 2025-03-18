
const express = require('express')
import {handler3648} from "./handler3648";
const app = express()
app.get('/3648', handler3648)
app.listen(3000, () => {})
        