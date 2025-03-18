
const express = require('express')
import {handler866} from "./handler866";
const app = express()
app.get('/866', handler866)
app.listen(3000, () => {})
        