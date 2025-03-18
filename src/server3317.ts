
const express = require('express')
import {handler3317} from "./handler3317";
const app = express()
app.get('/3317', handler3317)
app.listen(3000, () => {})
        