
const express = require('express')
import {handler3624} from "./handler3624";
const app = express()
app.get('/3624', handler3624)
app.listen(3000, () => {})
        