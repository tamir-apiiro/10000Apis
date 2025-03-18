
const express = require('express')
import {handler2257} from "./handler2257";
const app = express()
app.get('/2257', handler2257)
app.listen(3000, () => {})
        