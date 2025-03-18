
const express = require('express')
import {handler7530} from "./handler7530";
const app = express()
app.get('/7530', handler7530)
app.listen(3000, () => {})
        