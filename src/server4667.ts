
const express = require('express')
import {handler4667} from "./handler4667";
const app = express()
app.get('/4667', handler4667)
app.listen(3000, () => {})
        