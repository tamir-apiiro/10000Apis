
const express = require('express')
import {handler9604} from "./handler9604";
const app = express()
app.get('/9604', handler9604)
app.listen(3000, () => {})
        