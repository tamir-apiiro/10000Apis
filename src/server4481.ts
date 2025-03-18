
const express = require('express')
import {handler4481} from "./handler4481";
const app = express()
app.get('/4481', handler4481)
app.listen(3000, () => {})
        