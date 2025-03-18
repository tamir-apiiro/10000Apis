
const express = require('express')
import {handler269} from "./handler269";
const app = express()
app.get('/269', handler269)
app.listen(3000, () => {})
        