
const express = require('express')
import {handler4878} from "./handler4878";
const app = express()
app.get('/4878', handler4878)
app.listen(3000, () => {})
        