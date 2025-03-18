
const express = require('express')
import {handler746} from "./handler746";
const app = express()
app.get('/746', handler746)
app.listen(3000, () => {})
        