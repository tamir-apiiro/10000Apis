
const express = require('express')
import {handler4795} from "./handler4795";
const app = express()
app.get('/4795', handler4795)
app.listen(3000, () => {})
        