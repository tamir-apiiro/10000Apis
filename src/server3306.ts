
const express = require('express')
import {handler3306} from "./handler3306";
const app = express()
app.get('/3306', handler3306)
app.listen(3000, () => {})
        