
const express = require('express')
import {handler4045} from "./handler4045";
const app = express()
app.get('/4045', handler4045)
app.listen(3000, () => {})
        