
const express = require('express')
import {handler4530} from "./handler4530";
const app = express()
app.get('/4530', handler4530)
app.listen(3000, () => {})
        