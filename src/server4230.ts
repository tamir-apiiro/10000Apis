
const express = require('express')
import {handler4230} from "./handler4230";
const app = express()
app.get('/4230', handler4230)
app.listen(3000, () => {})
        