
const express = require('express')
import {handler88} from "./handler88";
const app = express()
app.get('/88', handler88)
app.listen(3000, () => {})
        