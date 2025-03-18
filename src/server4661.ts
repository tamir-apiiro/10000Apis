
const express = require('express')
import {handler4661} from "./handler4661";
const app = express()
app.get('/4661', handler4661)
app.listen(3000, () => {})
        