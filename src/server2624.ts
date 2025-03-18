
const express = require('express')
import {handler2624} from "./handler2624";
const app = express()
app.get('/2624', handler2624)
app.listen(3000, () => {})
        