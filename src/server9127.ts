
const express = require('express')
import {handler9127} from "./handler9127";
const app = express()
app.get('/9127', handler9127)
app.listen(3000, () => {})
        