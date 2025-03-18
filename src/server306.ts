
const express = require('express')
import {handler306} from "./handler306";
const app = express()
app.get('/306', handler306)
app.listen(3000, () => {})
        