
const express = require('express')
import {handler9746} from "./handler9746";
const app = express()
app.get('/9746', handler9746)
app.listen(3000, () => {})
        