
const express = require('express')
import {handler918} from "./handler918";
const app = express()
app.get('/918', handler918)
app.listen(3000, () => {})
        