
const express = require('express')
import {handler500} from "./handler500";
const app = express()
app.get('/500', handler500)
app.listen(3000, () => {})
        