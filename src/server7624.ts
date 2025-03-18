
const express = require('express')
import {handler7624} from "./handler7624";
const app = express()
app.get('/7624', handler7624)
app.listen(3000, () => {})
        