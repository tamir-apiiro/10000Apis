
const express = require('express')
import {handler9667} from "./handler9667";
const app = express()
app.get('/9667', handler9667)
app.listen(3000, () => {})
        