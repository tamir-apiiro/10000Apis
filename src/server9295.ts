
const express = require('express')
import {handler9295} from "./handler9295";
const app = express()
app.get('/9295', handler9295)
app.listen(3000, () => {})
        